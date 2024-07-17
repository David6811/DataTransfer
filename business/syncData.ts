import { getTotalRecords, fetchByPage } from "../MongoDB/fetchData"
import { ParseNote, Parse_Notes } from "../public/inf"
import { insertData, } from "../MongoDB/insertData"

export function syncData() {
    // const totalRecords = await getTotalRecords();
    // console.log(totalRecords);

    fetchByPage(1, 1)
        .then((results: ParseNote[]) => {
            results.forEach(parseNote => {
                const parseNotesData: Parse_Notes = {
                    content: parseNote.content,
                    title: parseNote.title,
                    noteId: parseNote.noteId,
                    type: parseNote.type,
                    status: parseNote.status,
                    deviceId: parseNote.deviceId,
                    parentId: parseNote.parentId
                };
                insertData(parseNotesData);
            });
        })
}