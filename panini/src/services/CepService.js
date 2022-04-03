import http from "../http-common";

class CepService {
    buscarCep(cep) {
        return http.get(`${cep}/json`);
    }
}

export default new CepService();