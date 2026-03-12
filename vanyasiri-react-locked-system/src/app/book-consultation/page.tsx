"use client";

import { useState } from "react";
import { UploadCloud, CheckCircle2, ChevronRight, AlertCircle, FileText } from "lucide-react";

// --- Premium Reusable UI Components ---

// A sleek floating-label input
const PremiumInput = ({ label, type = "text", required = false, width = "w-full", defaultValue = "" }: { label: string, type?: string, required?: boolean, width?: string, defaultValue?: string }) => (
    <div className={`relative group ${width}`}>
        <input
            type={type}
            required={required}
            defaultValue={defaultValue}
            placeholder=" "
            className="block w-full px-4 pt-6 pb-2 text-sm text-gray-900 bg-gray-50/50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-[#546247] focus:bg-white transition-all peer"
        />
        <label className="absolute text-xs text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-[#546247] font-medium tracking-wide uppercase">
            {label} {required && <span className="text-red-400">*</span>}
        </label>
    </div>
);

// An interactive Pill selector for multiple-choice (instead of checkboxes)
const PillSelector = ({ label, options, name }: { label: string, options: string[], name: string }) => {
    const [selected, setSelected] = useState<string>("");
    return (
        <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-[#2A2E26] tracking-wide">{label}:</span>
            <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                    <label key={opt} className={`cursor-pointer px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-300 shadow-sm
                        ${selected === opt ? 'bg-[#546247] text-white border-[#546247]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#546247] hover:text-[#546247]'}
                    `}>
                        <input
                            type="radio"
                            name={name}
                            value={opt}
                            className="hidden"
                            onChange={() => setSelected(opt)}
                            required
                        />
                        {opt}
                    </label>
                ))}
            </div>
        </div>
    );
};


// Premium Form Container Card
const FormCard = ({ title, step, children }: { title: string, step: string, children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-10 transition-transform duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
        <div className="bg-gray-50/80 px-8 py-5 border-b border-gray-100 flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#DFD5C4]/40 text-[#546247] font-serif flex items-center justify-center text-sm font-bold shrink-0">
                {step}
            </div>
            <h2 className="text-xl font-serif text-[#2A2E26] tracking-wide">{title}</h2>
        </div>
        <div className="p-8">
            {children}
        </div>
    </div>
);


export default function BookConsultationPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(prev => [...prev, ...Array.from(e.target.files as FileList)]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col w-full bg-[#F9F8F6] min-h-[80vh] items-center justify-center px-4 py-24">
                <div className="bg-white p-12 md:p-16 max-w-2xl text-center shadow-[0_20px_50px_rgb(0,0,0,0.05)] rounded-3xl border border-gray-100">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12 text-[#546247]" />
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-serif text-[#2A2E26] mb-6 tracking-wide">Request Received</h1>
                    <p className="text-gray-500 mb-10 text-lg font-light leading-relaxed max-w-lg mx-auto">
                        Your confidential health intake has been securely transmitted. A Vanyasiri Ayurvedic practitioner will review your profile and contact you shortly to schedule your session.
                    </p>
                    <button
                        onClick={() => window.location.href = "/"}
                        className="bg-[#546247] hover:bg-[#435038] text-white px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        Return to Sanctuary
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full bg-[#F9F8F6] min-h-screen pb-32">

            {/* Elegant Hero Header */}
            <section className="bg-[#2A2E26] text-white pt-40 pb-24 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/vanyasiri-logo.jpg')] opacity-5 bg-center bg-repeat mix-blend-overlay"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#546247] rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B38F52] rounded-full blur-[120px] opacity-20 translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 border border-[#B38F52]/30 text-[#B38F52] text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-6 bg-[#B38F52]/5 backdrop-blur-sm">
                        Confidential Intake
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight tracking-wide">
                        Vanyasiri Ayurveda
                    </h1>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#B38F52] to-transparent mx-auto mb-8"></div>
                    <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                        To provide you with the most authentic and personalized healing journey, please share the details of your constitution and current state of health.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[-40px] relative z-20 max-w-5xl">
                <form onSubmit={handleSubmit}>

                    {/* Step 1. Identification Drop */}
                    <FormCard step="1" title="Personal Identification">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <PremiumInput label="Patient Full Name" required width="lg:col-span-2" />
                            <PremiumInput label="Date of Consultation" type="date" required />

                            <div className="flex gap-6 lg:col-span-3">
                                <PremiumInput label="Age" type="number" required width="w-1/3" />
                                <div className="w-2/3">
                                    <PillSelector label="Gender" name="gender" options={["Male", "Female", "Prefer not to say"]} />
                                </div>
                            </div>

                            <PremiumInput label="Contact Number" type="tel" required />
                            <PremiumInput label="Email Address" type="email" required />
                            <PremiumInput label="City / District" width="lg:col-span-3" required />
                        </div>
                    </FormCard>

                    {/* Step 2. Anthropometric Data */}
                    <FormCard step="2" title="Anthropometric Data">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            <div className="flex gap-4">
                                <PremiumInput label="Height (cm)" type="number" />
                                <PremiumInput label="Weight (kg)" type="number" />
                            </div>
                            <div className="hidden md:block"></div> {/* Spacer */}

                            <PillSelector
                                label="Body Frame Breadth"
                                name="frame_breadth"
                                options={["Thin/Narrow", "Medium", "Broad"]}
                            />
                            <PillSelector
                                label="Body Frame Length"
                                name="frame_length"
                                options={["Too short", "Medium", "Tall/Too tall"]}
                            />
                        </div>
                    </FormCard>

                    {/* Step 3. Prakriti */}
                    <FormCard step="3" title="Physical Constitution (Prakriti)">
                        <div className="space-y-10">
                            <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-serif text-xl text-[#546247] mb-5 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#B38F52]"></div>Skin Profile
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <PillSelector label="Appearance" name="skin_appearance" options={["Clear", "Moles", "Pimples", "Marks", "Lustrous"]} />
                                    <PillSelector label="Nature" name="skin_nature" options={["Oily", "Dry", "Normal", "Seasonal/Variable"]} />
                                    <PillSelector label="Predominant Color" name="skin_color" options={["Fair reddish", "Fair pale", "Fair pink", "Wheatish", "Dark", "Dusky"]} />
                                </div>
                            </div>

                            <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-serif text-xl text-[#546247] mb-5 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#B38F52]"></div>Hair Profile
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <PillSelector label="Nature" name="hair_nature" options={["Dry", "Oily", "Normal", "Seasonal/Variable"]} />
                                    <PillSelector label="Color" name="hair_color" options={["Black", "Dark brown", "Light brown", "Copper"]} />
                                    <PillSelector label="Prone to" name="hair_prone" options={["Falling", "Breaking", "Graying", "Split ends", "None"]} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                                    <h3 className="font-serif text-lg text-[#546247] mb-4">Nails</h3>
                                    <div className="space-y-6">
                                        <PillSelector label="Color" name="nails_color" options={["Dark", "Pale yellow", "Pink", "Reddish"]} />
                                        <PillSelector label="Nature" name="nails_nature" options={["Firm", "Brittle"]} />
                                    </div>
                                </div>
                                <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                                    <h3 className="font-serif text-lg text-[#546247] mb-4">Teeth</h3>
                                    <div className="space-y-6">
                                        <PillSelector label="Color" name="teeth_color" options={["Dull", "Milky white", "Yellowish"]} />
                                        <PillSelector label="Shape" name="teeth_shape" options={["Even", "Uneven"]} />
                                        <PillSelector label="Size" name="teeth_size" options={["Large", "Medium", "Small"]} />
                                    </div>
                                </div>
                                <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                                    <h3 className="font-serif text-lg text-[#546247] mb-4">Lips & Palate</h3>
                                    <div className="space-y-6">
                                        <PillSelector label="Color" name="lips_color" options={["Dark", "Reddish", "Pale yellow", "Pink"]} />
                                        <PillSelector label="Tendency" name="lips_tendency" options={["Firm", "Cracked", "Wrinkled"]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FormCard>

                    {/* Step 4. Agni */}
                    <FormCard step="4" title="Digestive & Metabolic Health (Agni)">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <PillSelector label="Primary Taste Preference" name="taste_pref" options={["Sweet", "Sour", "Salty", "Bitter", "Pungent", "Astringent"]} />
                            <PillSelector label="Food/Beverage Temperature" name="food_temp" options={["Cold", "Warm", "Any", "None"]} />
                            <PillSelector label="Appetite Frequency" name="appetite_freq" options={["Regular", "Irregular"]} />
                            <PillSelector label="Appetite Amount" name="appetite_amt" options={["Low", "Medium", "High", "Variable"]} />
                            <PillSelector label="Overall Digestive Capacity" name="digestion_cap" options={["Low", "Medium", "High", "Variable"]} />

                            <div className="md:col-span-2 border-t border-gray-200 mt-4 pt-8">
                                <h3 className="font-serif text-xl text-[#546247] mb-6">Bowel Habits</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <PillSelector label="Frequency" name="bowel_freq" options={["Regular", "Irregular", "Variable"]} />
                                    <PillSelector label="Tendency" name="bowel_tendency" options={["Loose motions", "Constipation", "None"]} />
                                    <PillSelector label="Consistency" name="bowel_cons" options={["Hard", "Loose/soft", "Formed"]} />
                                </div>
                            </div>
                        </div>
                    </FormCard>

                    {/* Step 5. Manasika */}
                    <FormCard step="5" title="Lifestyle & Mental Health (Manasika)">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <div>
                                <h3 className="font-serif text-lg text-[#546247] mb-4">Sleep Profile</h3>
                                <div className="space-y-6">
                                    <PillSelector label="Amount" name="sleep_amt" options={["Low", "Medium", "High", "Variable"]} />
                                    <PillSelector label="Quality" name="sleep_qual" options={["Deep", "Sound", "Shallow"]} />
                                </div>
                            </div>

                            <div>
                                <h3 className="font-serif text-lg text-[#546247] mb-4">Cognition & Memory</h3>
                                <div className="space-y-6">
                                    <PillSelector label="Memorizing Speed" name="mem_speed" options={["Quick", "Slow", "Moderate", "Variable"]} />
                                    <PillSelector label="Forgetfulness" name="mem_forget" options={["Quick", "Slow", "Moderate", "Variable"]} />
                                </div>
                            </div>

                            <div className="md:col-span-2 border-t border-gray-200 pt-8 mt-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <PillSelector label="Body Temperature" name="body_temp" options={["Low", "High", "Medium", "Variable"]} />
                                    <PillSelector label="Perspiration" name="perspiration" options={["Low", "Medium", "High", "Variable"]} />
                                    <PillSelector label="Body Odor" name="body_odor" options={["Mild", "Strong", "Very less"]} />
                                    <PillSelector label="Speaking Speed" name="speak_speed" options={["Slow", "Quick", "Medium", "Variable"]} />
                                    <PillSelector label="Speaking Amount" name="speak_amt" options={["High", "Medium", "Low"]} />
                                    <PillSelector label="Work Quality" name="work_quality" options={["Sharp/Accurate", "Wavering"]} />
                                </div>
                            </div>
                        </div>
                    </FormCard>

                    {/* Step 6. Immunity */}
                    <FormCard step="6" title="Immunity & Seasonal Patterns">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <PillSelector label="Physical Power" name="imm_phys" options={["Poor", "Moderate", "Good"]} />
                            <PillSelector label="Mental Power" name="imm_ment" options={["Poor", "Moderate", "Good"]} />
                            <PillSelector label="Resistance to Illness" name="imm_res" options={["Poor", "Moderate", "Good"]} />
                            <PillSelector label="Healing Power" name="imm_heal" options={["Poor", "Moderate", "Good"]} />

                            <div className="md:col-span-2 border-t border-gray-200 pt-8 mt-2">
                                <h3 className="font-serif text-lg text-[#546247] mb-4">Seasonal Sensitivity</h3>
                                <PillSelector label="Increased problems in season" name="season_prob" options={["Summer", "Winter", "Rainy", "Spring", "None"]} />
                            </div>
                        </div>
                    </FormCard>


                    {/* Step 7. Health History */}
                    <FormCard step="7" title="Present & Past Health History">
                        <div className="space-y-8">
                            <div className="relative">
                                <label className="text-xs uppercase tracking-widest font-semibold text-gray-400 block mb-2">Current Chief Complaints <span className="text-red-400">*</span></label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-[#546247] focus:bg-white transition-all resize-none shadow-sm"
                                    placeholder="Please describe your current physical or mental health concerns in detail..."
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <label className="text-xs uppercase tracking-widest font-semibold text-gray-400 block mb-2">Past Illnesses</label>
                                    <textarea
                                        rows={3}
                                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-[#546247] focus:bg-white transition-all resize-none shadow-sm"
                                        placeholder="Major illnesses, chronic conditions..."
                                    ></textarea>
                                </div>
                                <div className="relative">
                                    <label className="text-xs uppercase tracking-widest font-semibold text-gray-400 block mb-2">Surgical History</label>
                                    <textarea
                                        rows={3}
                                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-[#546247] focus:bg-white transition-all resize-none shadow-sm"
                                        placeholder="Past surgeries, dates, and outcomes..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Premium File Dropzone */}
                        <div className="mt-12">
                            <h3 className="text-sm font-semibold text-[#2A2E26] uppercase tracking-wide mb-4 flex items-center gap-2">
                                <FileText size={16} className="text-[#B38F52]" /> Include Medical Records
                            </h3>
                            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center bg-gray-50/30 relative hover:bg-green-50/30 hover:border-[#546247]/50 transition-all group overflow-hidden">
                                <input
                                    type="file"
                                    multiple
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    onChange={handleFileChange}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none"></div>
                                <div className="relative z-0 flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                        <UploadCloud className="w-8 h-8 text-[#546247]" />
                                    </div>
                                    <p className="text-base font-medium text-gray-800 mb-1">Drag & Drop files here, or click to browse</p>
                                    <p className="text-xs text-gray-500 font-light">Supported formats: PDF, JPG, PNG (Max 5MB each)</p>
                                </div>
                            </div>

                            {/* Selected Files Preview */}
                            {files.length > 0 && (
                                <div className="mt-6 space-y-3">
                                    {files.map((file, idx) => (
                                        <div key={idx} className="flex items-center justify-between bg-white px-4 py-3 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3 overflow-hidden">
                                                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 size={16} className="text-[#546247]" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-gray-800 truncate max-w-[200px] sm:max-w-md">{file.name}</span>
                                                    <span className="text-[10px] text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFile(idx)}
                                                className="ml-4 text-[10px] uppercase tracking-widest text-[#F25C54] hover:text-white hover:bg-[#F25C54] px-3 py-1.5 rounded-full font-bold transition-all border border-[#F25C54]/20">
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </FormCard>

                    {/* Submission Area */}
                    <div className="pt-8 text-center pb-8 flex flex-col items-center">
                        <button type="submit" className="group relative inline-flex items-center justify-center px-12 py-5 text-sm font-semibold tracking-[0.2em] uppercase text-white transition-all bg-[#546247] rounded-full overflow-hidden shadow-[0_10px_20px_rgba(84,98,71,0.2)] hover:shadow-[0_10px_30px_rgba(84,98,71,0.3)] hover:-translate-y-1">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#384230] rounded-full group-hover:w-full group-hover:h-56"></span>
                            <span className="relative flex items-center gap-3">
                                Submit Encrypted Profile <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <div className="mt-6 flex flex-col items-center gap-2 max-w-sm">
                            <AlertCircle size={16} className="text-gray-400" />
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold text-center leading-relaxed">
                                End-to-End Encrypted. <br /> Your health data is strictly confidential.
                            </p>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}
