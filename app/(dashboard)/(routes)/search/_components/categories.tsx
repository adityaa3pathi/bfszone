"use client";
import {IconType} from "react-icons"
import { Category } from "@prisma/client";
import {
MdSportsBasketball
} from "react-icons/md"
import {
    FaTrophy
} from "react-icons/fa"
import {
    GiWhistle,
    GiBasketballJersey,
    GiBasketballBasket,
    GiCrackedBallDunk
} from "react-icons/gi"
import { CgGym } from "react-icons/cg";
import { PiCourtBasketball } from "react-icons/pi";
import { CategoryItem } from "./category-item";


interface CategoriesProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Intermediate": MdSportsBasketball,
    "Advanced":  FaTrophy,
    "For Trainers": GiWhistle,
    "Training gear": GiBasketballJersey,
    "Dribbling": GiBasketballBasket,
    "Shooting": GiCrackedBallDunk,
    "Explosive Workouts": CgGym,
    "Layups":  PiCourtBasketball

}

export const Categories = ({
    items,
}: CategoriesProps ) => {
    return (
        <div className="flex items-center gap-x-2">
           {items.map((item) => (
            <CategoryItem
            key={item.id}
            label={item.name}
            icon={iconMap[item.name]}
            value={item.id}
            />
           ))}
        </div>
    )
}