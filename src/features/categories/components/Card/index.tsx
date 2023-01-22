import { FC, useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Tile from "components/ui/Tile";
import Images from "../../../../components/ui/Image";
import CustomLink from "../../../../components/ui/Link";

const Categories = (array: string[]) => {
  const newArr: string[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[array.length - 1]) {
      newArr.push(array[i] + ".");
    } else {
      newArr.push(array[i] + ", ");
    }
  }
  return newArr.join("");
};

// const maxLenghtDescription = (array: string[]) => {
//   const maxString = array.join(" ");
//   if (maxString.length > 125) {
//     return maxString.slice(0, 125) + "...";
//   } else {
//     return maxString;
//   }
// };

// const card = (array: [], foo: any) => {
//   const res = null;
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     // foo(element.card.categories)
//   }
//   return res;
// };

export const Card: FC<CardConfig> = () => {
  const users = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });
  useCallback(() => Categories, []);
  return (
    <>
      {users.isLoading ? (
        <p>Loading ...</p>
      ) : (
        users.data.map((user: any) => {
          return (
            <CustomLink to={`/${encodeURIComponent(user.id)}`} key={user.id}>
              <div className="flex mb-10 h-72 justify-around cursor-pointer hover:shadow-[0px_0px_1rem_0px_rgba(0,0,0,0.7)]">
                <div className="w-1/4 h-full relative mr-5">
                  <Images
                    src={user.images.image.path}
                    alt={user.images.image.description}
                    priority={true}
                    placeholder={"blur"}
                    fill={true}
                    sizes="(max-width: 1100) 20vw,33vw"
                  />
                </div>
                <div className="mr-5 w-[25vw]">
                  <h4 className="">{user.title}</h4>
                  <h4 className="">Описание:</h4>
                  {user.description.map((text: string) => {
                    return text.length > 125 ? (
                      <p key={Math.random() * 2}>
                        {`${text.slice(0, 125)}`}...
                      </p>
                    ) : (
                      <p key={Math.random() * 4}>{text}</p>
                    );
                  })}
                  <h4 className="">Категории:</h4>
                  <div className="flex mb-3">
                    <p>{Categories(user.categories)}</p>
                  </div>
                </div>
                <div className="mr-5 w-[15vw]">
                  <p className="mb-3">Оценка {user.assessment}</p>
                  <p className="mb-3">
                    Количество отзывов {user.numberOfReviews}
                  </p>
                  <p className="mb-3">
                    В избранных - {user.favorites === false ? "No" : "Yes"}
                  </p>
                  <p className="mb-3">Цена от {user.price}</p>
                </div>
              </div>
            </CustomLink>
          );
        })
      )}
    </>
  );
};
