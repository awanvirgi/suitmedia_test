export const fetchData = async (curr,size,order) => {
    const response = await fetch();
    const data = await response.json(`page[number]=${curr}&page[size]=${size}&append[]=small_image&append[]=medium_image&sort=${order}`)
    return data
}
