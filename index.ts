import {getTotalRecords, fetchByPage} from "./MongoDB/fetchData"

async function fetchData() {
    try {
        const totalRecords = await getTotalRecords();
        console.log(totalRecords);

        fetchByPage(1, 2)
            .then(results => console.log(results))
            .catch(console.dir);
    } catch (error) {
        console.dir(error);
    }
}

fetchData();