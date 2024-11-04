"use server"

import { fetchGraphQl } from "@/app/api/graphicql"
import { GET_POSTS_CATEGORYLIST_QUERY, GET_POSTS_LIST_QUERY } from "@/app/api/query"


export const CategoryListApi = async ()=>{

    let variable_category={
        "commonFilter": {
        "limit":50,
        "offset":0
         },
        "categoryFilter": {
          // "hierarchyLevel": 2,
          "categoryGroupSlug": "knowledge-base",
          "excludeGroup": true,}
      }
      let cateData = await fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category)
      return cateData;
}


export const CategoryEntriesApi = async ()=>{
    let  variable_list={ 
        "commonFilter": {"limit": 10, "offset": 0},
        "AdditionalData": {
        "authorDetails": true,
        "categories": true},
        "entryFilter": {
         "categorySlug": "knowledge-base",
        },}

        let cateEntriesData = await fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list)
        return cateEntriesData
}
