import axios from "axios";


const instance = axios.create({
  baseURL: "https://api.github.com",
});

export const githubApi = {
    getUser (userName: string) {
        return instance.get<User>(`/users/${userName}`)
    },
    getRepositories (userName: string, currentPage = 1, pageLimit = 4) {
        return instance.get<Repository[]>(`/users/${userName}/repos?page=${currentPage}&per_page=${pageLimit}`)
    }
};


export type User = {
    id: number;
    login: string;
    name: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
}

export type Repository = {
    id: number;
    name: string;
    html_url: string;
    description: string;
}