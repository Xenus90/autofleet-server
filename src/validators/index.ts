export default class Validator {
    static areaVehiclesData(data: any) {
        if (!Array.isArray(data)) {
            return false;
        }

        if (data.length !== 4) {
            return false;
        }

        const isCoordsValid = data.map(cell => {
            if (cell.length !== 2) {
                return false;
            }

            if (typeof cell[0] !== 'number' || typeof cell[1] !== 'number') {
                return false;
            }

            return true;
        }).reduce((acc, value) => acc && value, true);

        if (!isCoordsValid) {
            return false;
        }

        return true;
    }
}
