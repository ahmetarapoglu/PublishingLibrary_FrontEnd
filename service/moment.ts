import "moment/locale/tr";
import moment from "moment";

const localeMoment = (value: Date) => moment(value).format("L");

export { localeMoment };
