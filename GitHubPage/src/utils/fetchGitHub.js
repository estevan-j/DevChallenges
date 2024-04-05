const gitUri = "https://api.github.com/users";

export const fetchGitHub = async (path='GitHub') => {
    try {
        const response = await fetch(`${gitUri}/${path}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }     
}