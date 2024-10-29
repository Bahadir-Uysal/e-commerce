/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import api from "../api/axios";
import { toast } from "react-toastify";
function SignUpPageContent() {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_id: "1", // Customer role as default
    },
  });

  const selectedRole = watch("role_id");

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
      } catch (error) {
        toast.error("Failed to fetch roles");
      }
    };
    fetchRoles();
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: 1, // parseInt(data.role_id), // Convert to number
      };

      if (data.role_id === "2") {
        formData.store = {
          name: data.store.name,
          phone: data.store.phone.replace(/\D/g, ""), // Remove non-digits
          tax_no: data.store.tax_no,
          bank_account: data.store.bank_account.replace(/\s/g, ""), // Remove spaces
        };
      }

      await api.post("/signup", formData);

     navigate(-1);
      toast.success("You need to click link in email to activate your account!")

    
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-md shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold text-[#252B42]">
            Create an Account
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* Name Field */}
          <div>
            <label className="text-sm font-medium text-[#252B42]">Name</label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="appearance-none rounded relative block w-full px-3 py-2 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm mt-1"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="text-sm font-medium text-[#252B42]">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm mt-1"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="text-sm font-medium text-[#252B42]">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
                },
              })}
              type="password"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm mt-1"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="text-sm font-medium text-[#252B42]">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              type="password"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm mt-1"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Role Selection */}
          <div>
            <label className="text-sm font-medium text-[#252B42]">Role</label>
            <select
              {...register("role_id", { required: "Role is required" })}
              defaultValue="1"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm mt-1"
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          {/* Store Fields (Conditional) */}
          {selectedRole === "2" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#252B42]">
                  Store Name
                </label>
                <input
                  {...register("store.name", {
                    required: "Store name is required",
                    minLength: {
                      value: 3,
                      message: "Store name must be at least 3 characters",
                    },
                  })}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm mt-1"
                />
                {errors.store?.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.store.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#252B42]">
                  Store Phone
                </label>
                <InputMask
                  mask="+90 (999) 999-9999"
                  {...register("store.phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^(\+90|0)?[0-9]{10}$/,
                      message: "Must be a valid Turkish phone number",
                    },
                  })}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm mt-1"
                />
                {errors.store?.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.store.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#252B42]">
                  Tax ID
                </label>
                <InputMask
                  mask="T9999V999999"
                  {...register("store.tax_no", {
                    required: "Tax ID is required",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message: "Must match pattern TXXXXVXXXXXX",
                    },
                  })}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm mt-1"
                />
                {errors.store?.tax_no && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.store.tax_no.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#252B42]">
                  IBAN
                </label>
                <InputMask
                  mask="TR99 9999 9999 9999 9999 9999 99"
                  {...register("store.bank_account", {
                    required: "IBAN is required",
                    pattern: {
                      value: /^TR[0-9]{24}$/,
                      message: "Must be a valid Turkish IBAN",
                    },
                  })}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-[#E6E6E6] placeholder-[#737373] text-[#252B42] focus:outline-none focus:ring-[#23A6F0] focus:border-[#23A6F0] sm:text-sm mt-1"
                />
                {errors.store?.bank_account && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.store.bank_account.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#23A6F0] hover:bg-[#1E90D4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23A6F0] disabled:opacity-50"
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  ); //TODO there might be a issue with the tax and phone validation for store role.
}
export default SignUpPageContent;
