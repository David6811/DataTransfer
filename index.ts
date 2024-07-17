import { getTotalRecords, fetchByPage } from "./MongoDB/fetchData"
import { ParseNote } from "./public/inf"


async function fetchData() {
    try {
        // const totalRecords = await getTotalRecords();
        // console.log(totalRecords);

        fetchByPage(1, 1)
            .then((results: ParseNote[]) => {
                results.forEach(parseNote => {
                    console.log('title:', parseNote.title);
                    console.log('content:', parseNote.content);
                    console.log('_created_at:', parseNote._created_at);
                });

            })
            .catch(console.dir);
    } catch (error) {
        console.dir(error);
    }
}

fetchData();