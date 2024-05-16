import { useLoaderData, useParams } from "react-router-dom";
import CategoryCardDetailsPost from "./CategoryCardDetailsPost";


const CategoryCardDetails = () => {
    const categoryData = useLoaderData();
    const {id} = useParams();


    const data = categoryData.find(d => d._id === id);

    const {content} = data;
    console.log( content);

    console.log('asmalt heke ifd:',id, categoryData);
    return (
        <div>
            <h1>
                <p>{data._id}</p>
                this is category card details!
                <p>{data.serial}</p>
            </h1>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-8">
                {
                    content.map((c, i )=> <CategoryCardDetailsPost key={i} c={c}></CategoryCardDetailsPost>)
                }
            </div>
        </div>
    );
};

export default CategoryCardDetails;