export async function getChristmas() {

    const response = await fetch('/api/christmas');
    return await response.json();
}