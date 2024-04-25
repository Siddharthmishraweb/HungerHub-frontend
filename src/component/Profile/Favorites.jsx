import { useSelector } from 'react-redux';
import { Restaurant } from '../Restaurant/Restaurant';

export const Favorites = () => {
    const { auth } = useSelector(store=> store)
    return (
        <div>
            <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
            <div className="flex flex-wrap gap-3 justify-center">
                {
                    auth.favorites.map((item) => <Restaurant data={item}/>)
                }
            </div>
        </div>
    );
}