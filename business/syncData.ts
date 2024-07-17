import { getTotalRecords, fetchByPage } from "../MongoDB/fetchData"
import { ParseNote, Parse_Notes } from "../public/inf"
import { insertData, } from "../MongoDB/insertData"

export function syncData() {
    // const totalRecords = await getTotalRecords();
    // console.log(totalRecords);

    fetchByPage(1, 10)
        .then(async (results: ParseNote[]) => {
            // results.forEach(async parseNote => { //forEach can not be sync
            for (const parseNote of results) {
                const parseNotesData: Parse_Notes = {
                    content: parseNote.content,
                    title: parseNote.title,
                    noteId: parseNote.noteId,
                    type: parseNote.type,
                    status: parseNote.status,
                    deviceId: parseNote.deviceId,
                    parentId: parseNote.parentId
                };
                console.log("insertData");
                console.log(await insertData(parseNotesData));
            };
        })
}