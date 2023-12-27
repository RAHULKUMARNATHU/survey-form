import { HttpClient } from "../helpers/httpClient";


const PATH = {
  Survey : "/api/v1/survey",
};



export interface SurveyData {
  name: string;
  gender: string;
  nationality: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

const getSurvey = async () => {
    try{

        return await HttpClient.get(PATH.Survey)
    }catch(error){
        console.debug(error);
        return {data:null , error} ;
    }
}


const createSurvey = async (surveyData: SurveyData) => {
  try {
    return await HttpClient.post(PATH.Survey, surveyData);
  } catch (error) {
    console.debug(error);
    return { data: null, error };
  }
};




export const DashboardService = {
  getSurvey,
  createSurvey,
};
