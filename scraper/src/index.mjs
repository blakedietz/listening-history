import secrets from '../configs/secrets.json';
import {fetchUserListeningHistory} from "./api";

const main = async () => {
    await fetchUserListeningHistory({user:'PH3ARL3SS', apiKey: secrets.api_key })
};

main();
