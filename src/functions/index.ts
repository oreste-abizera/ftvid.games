import axios from 'axios';
import url from '../utils/url';

export async function loadVideos(page: Number) {
  let response = await axios
    .get(`${url}/videos?page=${page}`)
    .catch((err) => console.log(err));
  if (response) {
    if (response.data) {
      return response.data.matches;
    }
  }
  return [];
}

export async function loadSearchedVideos(searchKey: string) {
  let response = await axios
    .get(`${url}/videos/search?search=${searchKey}`)
    .catch((err) => console.log(err));
  if (response) {
    if (response.data) {
      console.log('response.data');
      return response.data.matches;
    }
  }
  return [];
}

export async function loadVideo(id: string) {
  let response = await axios
    .get(`${url}/videos/${id}`)
    .catch((err) => console.log(err));
  if (response) {
    if (response.data) {
      return response.data.match;
    }
  }
}
