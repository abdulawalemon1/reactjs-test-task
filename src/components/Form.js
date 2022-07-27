import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Table from './Table';

const Form = () => {
    const [formData, setFormData] = useState([]);

    const { register, resetField, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        setFormData(formData)

    }, [formData]);

    const onSubmit = data => {
        var newFormData = [...formData, data];
        setFormData(newFormData);
        resetField('date');
        resetField('amount');
        resetField('paymode');
        resetField('remark');


    };

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} class="card-body">
                            <h1>Receipt Details</h1>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Date <span className='text-red-500'>*</span></span>
                                </label>
                                <input {...register("date", { required: true })} type="date" placeholder="Enter Date" class="input input-bordered" />
                                <input />
                                {errors.date?.type === 'required' && <p className='text-red-500 text-xs'>Date is required</p>}
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Amount <span className='text-red-500'>*</span></span>
                                </label>
                                <input {...register("amount",
                                    {
                                        required: { value: true, message: 'Amount is required!' },
                                        min: 1,

                                    })}
                                    type="number" placeholder="Enter Amount (in INR)" class="input input-bordered" />
                                {errors.amount?.type === 'required' && <p className='text-red-500 text-xs'>Amount is required</p>}
                                {errors.amount?.type === 'min' && <p className='text-red-500 text-xs'>Enter a valid amount!</p>}
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Payment Mode<span className='text-red-500'>*</span></span>
                                </label>
                                <select {...register("paymode", { required: true })} class="select select-bordered w-full max-w-xs">
                                    <option value="cash">cash</option>
                                    <option value="card">card</option>
                                </select>
                                {errors.paymode?.type === 'required' && <p className='text-red-500 text-xs'>Select payment method!</p>}

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Remark</span>
                                </label>
                                <input {...register('remark')} type="text" placeholder="Enter Remark" class="input input-bordered" />
                            </div>
                            <div className='flex justify-around'>
                                <div class="form-control mt-6">
                                    <button class="btn btn-error">Cancel</button>
                                </div>
                                <div class="form-control mt-6">
                                    <input type='submit' class="btn btn-success" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='flex justify-center overflow-x-auto mt-10 mx-20'>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th> Payment type</th>
                            <th> Remarks</th>
                        </tr>
                    </thead>
                    {formData && formData?.map((data, index) =>


                        <tbody >
                            <tr>
                                <td>{index + 1}</td>
                                <td>{data.date}</td>
                                <td>{data.amount}</td>
                                <td>{data.paymode}</td>
                                <td>{data.remark}</td>
                            </tr>
                        </tbody>


                    )}
                </table>
            </div>
        </div>
    );
};

export default Form;