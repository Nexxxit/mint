import axios from "axios";

export default async function getCurrencyRate(){
    try{
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        return response.data.Valute.USD.Value;
    } catch (error) {
        console.error('Error fetching currency rate:', error);
        return null;
    }
};