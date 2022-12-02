import React from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

function FavouritesPage() {
  const { removeFavourites } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) return <p className="text-center">No items.</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((fav) => (
          <li key={fav} className="mb-2">
            <button
              className="mr-2 bg-red-500 text-white p-1"
              onClick={() => removeFavourites(fav)}
            >
              remove
            </button>
            <a href={fav} target="_blank">
              {fav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavouritesPage;
