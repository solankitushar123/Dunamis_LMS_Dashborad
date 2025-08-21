import React, { useState } from 'react';

const PricingForm = () => {
    const [sessions, setSessions] = useState({
        standard: {
            enabled: false,
            monthlyFee: '',
            fullPayment: '',
            discount: '',
        },
        premium: {
            enabled: false,
            monthlyFee: '',
            fullPayment: '',
            discount: '',
        },
    });

    const handleToggle = (type) => {
        setSessions((prev) => ({
            ...prev,
            [type]: {
                ...prev[type],
                enabled: !prev[type].enabled,
            },
        }));
    };

    const handleChange = (type, field, value) => {
        setSessions((prev) => ({
            ...prev,
            [type]: {
                ...prev[type],
                [field]: value,
            },
        }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* --- Standard Session --- */}
            <div className="col-span-full mt-2">
                <div className="flex items-center gap-2 mb-2">
                    <input
                        type="checkbox"
                        checked={sessions.standard.enabled}
                        onChange={() => handleToggle('standard')}
                    />
                    <label className="text-sm font-medium text-gray-700">Standard Session</label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Monthly Fee */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Monthly Fee</label>
                        <input
                            type="text"
                            disabled={!sessions.standard.enabled}
                            value={sessions.standard.monthlyFee}
                            onChange={(e) => handleChange('standard', 'monthlyFee', e.target.value)}
                            className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                        />
                    </div>

                    {/* Full Payment */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Payment</label>
                        <input
                            type="text"
                            disabled={!sessions.standard.enabled}
                            value={sessions.standard.fullPayment}
                            onChange={(e) => handleChange('standard', 'fullPayment', e.target.value)}
                            className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                        />
                    </div>

                    {/* Discount */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Discount</label>
                        <input
                            type="text"
                            disabled={!sessions.standard.enabled}
                            value={sessions.standard.discount}
                            onChange={(e) => handleChange('standard', 'discount', e.target.value)}
                            className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                        />
                    </div>
                </div>
            </div>

            {/* --- Premium Session --- */}
            <div className="col-span-full mt-6">
                <div className="flex items-center gap-2 mb-2">
                    <input
                        type="checkbox"
                        checked={sessions.premium.enabled}
                        onChange={() => handleToggle('premium')}
                    />
                    <label className="text-sm font-medium text-gray-700">Premium Session</label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Monthly Fee */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Monthly Fee</label>
                        <input
                            type="text"
                            disabled={!sessions.premium.enabled}
                            value={sessions.premium.monthlyFee}
                            onChange={(e) => handleChange('premium', 'monthlyFee', e.target.value)}
                            className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                        />
                    </div>

                    {/* Full Payment */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Payment</label>
                        <input
                            type="text"
                            disabled={!sessions.premium.enabled}
                            value={sessions.premium.fullPayment}
                            onChange={(e) => handleChange('premium', 'fullPayment', e.target.value)}
                            className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                        />
                    </div>

                    {/* Discount */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Discount</label>
                        <input
                            type="text"
                            disabled={!sessions.premium.enabled}
                            value={sessions.premium.discount}
                            onChange={(e) => handleChange('premium', 'discount', e.target.value)}
                            className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingForm;
