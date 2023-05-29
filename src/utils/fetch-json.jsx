async function GetMenu() {
    const res = await fetch("http://localhost:7000/menu");
    return await res.json();
}
export default GetMenu;