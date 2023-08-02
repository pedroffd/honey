import differenceInHours from "date-fns/differenceInHours";
import differenceInMinutes from "date-fns/differenceInMinutes";
import format from "date-fns/format";

export const getTrimmedPersonName = (str: string) =>
  str?.length > 11
    ? [str.split("").slice(0, 10).join(""), "..."].join("")
    : str;

export const getWordLength = (str: string) => str?.length;

export const mailValidator = (mail: string) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail);

export const checkURL = (url: string) =>
  /^data:image\/(?:gif|png|jpeg|jpg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/g.test(
    url
  );

export const getDateViewedMe = (date: string) => {
  if (date) {
    const hours = differenceInHours(new Date(), Date.parse(date));
    const minutes = differenceInMinutes(new Date(), Date.parse(date));
    if (!minutes) {
      return "now";
    } else if (minutes < 60 && minutes > 0) {
      return `${minutes} mins ago`;
    } else if (hours < 23 && hours > 0) {
      return `${hours} hrs ago`;
    } else if (hours < 48 && hours > 23) {
      return "1 day ago";
    } else if (hours > 48) {
      return `${format(Date.parse(date), "dd.MM.yyyy")}`;
    }
  }
};

export const PythagorasEquirectangular = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  lat1 = Deg2Rad(lat1);
  lat2 = Deg2Rad(lat2);
  lon1 = Deg2Rad(lon1);
  lon2 = Deg2Rad(lon2);
  var R = 6371; // km
  var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  var y = lat2 - lat1;
  var d = Math.sqrt(x * x + y * y) * R;

  return d;
};

export const Deg2Rad = (deg: number) => {
  return (deg * Math.PI) / 180;
};

export const randomKey = () => Math.floor(Math.random() * (100000 - 1) + 1);

export const getDateLastConnection = (date:string) => {
  if (date) {
    const hours = differenceInHours(new Date(), Date.parse(date));
    const minutes = differenceInMinutes(new Date(), Date.parse(date));
    if (!minutes) {
      return "Online";
    } else if (minutes < 60 && minutes > 0) {
      return `${minutes} mins ago`;
    } else if (hours < 23 && hours > 0) {
      return `${hours} hours ago`;
    } else if (hours > 24 && hours < 168) {
      return hours/24 >= 2 ? `${Math.floor(hours/24)} days ago` : `1 day ago`;
    } else if (hours >= 168) {
      return "More than a week ago";
    } else {
      return "More than a week ago";
    }
  }
}

export const generateDateFromNow = (numOfDays: number) => {
  const today = new Date();
  const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + numOfDays);
  return lastWeek;
}
