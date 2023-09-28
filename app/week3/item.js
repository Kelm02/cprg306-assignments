export default function Item({name, quantity, category}) {
    return (
        <div className="text-lg font-thin border border-orange-500 bg-green-800 text-slate-400 w-full max-w-xs m-4 p-4">
        <h3 className="text-xl font-bold text-center">{name}</h3>
        <p className="quantity font-bold">Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    );
}
