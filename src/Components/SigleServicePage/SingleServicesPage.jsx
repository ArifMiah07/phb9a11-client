
import { useLoaderData, useParams } from 'react-router-dom';
import CoursesDetails from '../../Pages/Home/Categorys/CoursesDetails';
import { Helmet } from 'react-helmet-async';
import Obj from '../Others/Obj';

const SingleServicesPage = () => {

const loaderData = useLoaderData();
// const a = [1, 2, 3, 4, 5, 6];

// // Accessing elements directly:
// console.log(a[1]); // Output: 2

// const newArray = loaderData.filter(ma => {
//   console.log(ma);
//   return ma;
// });
// const b = loaderData.filter(ma => {
//   console.log(ma);
//   return ma;
// });

// console.log(newArray);
// console.log(b);
// console.log(loaderData);

const { heading1, sl } = useParams();

    return (
        <div>
            <Helmet>
                <title>Single Services Page</title>
            </Helmet>
            <h1>hy{heading1}  {sl}</h1>
            {/* <Obj sl={sl}></Obj> */}
            <CoursesDetails  loaderData={loaderData} sl={sl} heading1={heading1}></CoursesDetails>
        </div>
    );
};

export default SingleServicesPage;