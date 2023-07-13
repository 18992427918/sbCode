import httpInstance  from "@/utils/http";


function getCategory(){
    return  httpInstance({
        url:'anime/?spm_id_from=333.1007.0.0'
    })
}