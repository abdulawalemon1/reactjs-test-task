import React from 'react';

const Form = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <h1>Receipt Details</h1>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Date <span className='text-red-500'>*</span></span>
                                </label>
                                <input type="date" placeholder="Enter Date" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Amount <span className='text-red-500'>*</span></span>
                                </label>
                                <input type="number" placeholder="Enter Amount (in INR)" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Payment Mode<span className='text-red-500'>*</span></span>
                                </label>
                                <select class="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Select</option>
                                    <option>Cash</option>
                                    <option>Card</option>
                                </select>

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Remark</span>
                                </label>
                                <input type="text" placeholder="Enter Remark" class="input input-bordered" />
                            </div>
                            <div className='flex justify-around'>
                                <div class="form-control mt-6">
                                    <button class="btn btn-error">Cancel</button>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;