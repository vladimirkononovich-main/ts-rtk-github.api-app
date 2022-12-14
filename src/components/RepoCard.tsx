import React, { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";

function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourites, removeFavourites } = useActions();
  const { favourites } = useAppSelector((state) => state.github);
  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const addToFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourites(repo.html_url);
    setIsFav(true)
  };

  const removeFromFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourites(repo.html_url);
    setIsFav(false)
  };

  return (
    <a href={repo.html_url} target="_blank">
      <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo.description}</p>

        {!isFav && (
          <button
            className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
            onClick={addToFavourites}
          >
            Add
          </button>
        )}

        {isFav && (
          <button
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={removeFromFavourites}
          >
            Remove
          </button>
        )}
      </div>
    </a>
  );
}

export default RepoCard;
