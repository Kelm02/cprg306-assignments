import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className="border border-orange-500 bg-green-800 w-full text-5xl font-bold p-4 m-8 text-center text-slate-400">
                Meal Prep Groceries :D 
            </h1>
            <ItemList/>

        </main>
    )
}