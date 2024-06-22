import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosusPublic from "../../../hooks/useAxiosusPublic";



const DashboardHome = () => {

    const axiouspublic = useAxiosusPublic();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const [startDate, setStartDate] = useState(new Date());
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const handlthesubmitbio = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const height = form.height.value;
        const weight = form.weight.value;
        const exweight = form.expartnerweight.value;
        const exheight = form.expartnerheight.value;
        const email = form.email.value;
        const age = form.age.value;
        const exage = form.expartnerage.value;
        const bddate = startDate;
        const race = form.race.value;
        const occupation = form.occupation.value;
        const permanentdiv = form.permanentdiv.value;
        const presentdiv = form.presentdiv.value;
        const number = form.number.value;
        const fathersname = form.fathersname.value;
        const mothersname = form.mothersname.value;
        const gender = form.gender.value;
        const image = form.image.value;

        const res = await axiouspublic.post(image_hosting_api, image, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res)

        const info = {name, age, gender, email, height, weight, fathersname, mothersname, exheight, exweight, exage, number, bddate, occupation, race, permanentdiv, presentdiv, image }

    }


    return (
        <div className="w-full">
            <h3 className="text-center text-5xl">Bio-Data Form : </h3>
            <form action="" onSubmit={handlthesubmitbio} className="max-w-[60vw] mx-auto">

                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label className="sr-only">Underline select</label>
                        <select name="gender" id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Choose a Biodata Type</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input name="image" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <div className="flex ">
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div>
                        <label className="sr-only">Underline select</label>
                        <select name="height" id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Select your height</option>
                            <option value="6 feet">6 feet</option>
                            <option value="5 feet">5 feet</option>
                            <option value="4 feet">7 feet</option>
                        </select>
                    </div>
                    <div>
                        <label className="sr-only">Underline select</label>
                        <select name="weight" id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Select your Weight</option>
                            <option value="50kg">50kg</option>
                            <option value="55kg">55kg</option>
                            <option value="60kg">60kg</option>
                            <option value="65kg">65kg</option>
                            <option value="70kg">70kg</option>
                            <option value="70+">70+</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="age" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                    </div>
                    <div>
                        <label className="sr-only">Underline select</label>
                        <select name="occupation" id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Occupation</option>
                            <option value="student">Student</option>
                            <option value="govt job">govt job</option>
                            <option value="worker">worker</option>
                            <option value="bussiness man">bussiness man</option>
                        </select>
                    </div>
                    <div>
                        <label className="sr-only">Underline select</label>
                        <select name="race" id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Race</option>
                            <option value="islam">Islam</option>
                            <option value="hindu">Hindu</option>
                            <option value="chirstian">Chirstian</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="fathersname" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fathers Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="mothersname" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mothers Name</label>
                    </div>
                    <div>
                        <label className="sr-only">Underline select</label>
                        <select name="permanentdiv" id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Select Your Permanent Division</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="chittagong">Chittagong</option>
                            <option value="barishal">Barishal</option>
                            <option value="khulna">Khulna</option>
                            <option value="sylhet">Sylhet</option>
                            <option value="rajshahi">Rajshahi</option>
                            <option value="jessore">Jessore</option>
                            <option value="rangpur">Rangpur</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label className="sr-only">Underline select</label>
                        <select name="presentdiv" id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Select Your Present Division</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="chittagong">Chittagong</option>
                            <option value="barishal">Barishal</option>
                            <option value="khulna">Khulna</option>
                            <option value="sylhet">Sylhet</option>
                            <option value="rajshahi">Rajshahi</option>
                            <option value="jessore">Jessore</option>
                            <option value="rangpur">Rangpur</option>
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="expartnerage" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expected Partner Age</label>
                    </div>
                    <div>
                        <label className="sr-only">Underline select</label>
                        <select name="expartnerheight" id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Select your Expected Partnerheight</option>
                            <option value="6 feet">6 feet</option>
                            <option value="5 feet">5 feet</option>
                            <option value="4 feet">7 feet</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label className="sr-only">Underline select</label>
                        <select name="expartnerweight" id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Select your Expected Partner Weight</option>
                            <option value="50kg">50kg</option>
                            <option value="55kg">55kg</option>
                            <option value="60kg">60kg</option>
                            <option value="65kg">65kg</option>
                            <option value="70kg">70kg</option>
                            <option value="70+">70+</option>
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="number" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number</label>
                    </div>

                </div>
                <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default DashboardHome;