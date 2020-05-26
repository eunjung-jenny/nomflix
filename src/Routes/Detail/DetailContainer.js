import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    id: null,
    isMovie: null,
    result: null,
    error: null,
    loading: true,
  };

  getResult = async (isMovie, id) => {
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(
          id
        ));
      } else {
        ({ data: result } = await tvApi.tvDetail(id));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({
        id,
        isMovie,
        result,
        loading: false,
      });
    }
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      location: { pathname },
      history: { push },
    } = this.props;
    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    const isMovie = pathname.includes("movie");
    this.getResult(isMovie, parsedId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id) {
      const {
        match: {
          params: { id },
        },
        location: { pathname },
        history: { push },
      } = this.props;
      const parsedId = Number(id);
      if (isNaN(parsedId)) {
        return push("/");
      }
      const isMovie = pathname.includes("movie");
      if (
        this.state.id !== parsedId ||
        this.state.isMovie !== isMovie
      ) {
        this.getResult(isMovie, parsedId);
      }
    }
  }

  render() {
    const { id, result, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}
