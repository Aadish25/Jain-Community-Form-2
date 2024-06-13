import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { handleOpen } from "../reducers/snackbar/snackbar";
import { useDispatch } from "react-redux";

export default function Form() {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    leaderName: "",
    fatherName: "",
    gotra: "",
    address: "",
    originalResident: "",
    profession: "",
    officeAddress: "",
    mobileNumber: "",
    email: "",
    religiousAffiliation: {
      mandirMargi: {
        tapagacch: false,
        khartargacch: false,
        tristutik: false,
      },
      sthanakvasi: {
        shramanSangh: false,
        terapanth: false,
        sadhumargi: false,
        any: false,
      },
    },
    achievement: "",
  });

  const [rows, setRows] = useState([
    {
      name: "",
      dob: "",
      relation: "",
      bloodGroup: "",
      education: "",
      married: "",
    },
  ]);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleAffiliationChange = (category, field, value) => {
    setFormData({
      ...formData,
      religiousAffiliation: {
        ...formData.religiousAffiliation,
        [category]: {
          ...formData.religiousAffiliation[category],
          [field]: value,
        },
      },
    });
  };

  const handleRowChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        name: "",
        dob: "",
        relation: "",
        bloodGroup: "",
        education: "",
        married: "",
      },
    ]);
  };

  const handleRemoveRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      if(!formData.leaderName || !formData.fatherName || !formData.gotra || !formData.address || !formData.originalResident || !formData.profession || !formData.officeAddress || !formData.mobileNumber || !formData.email || !formData.achievement) {
         return dispatch(handleOpen({ message: "Please fill all the fields", severity: "error" }));
      }
      const data = { ...formData, rows: rows };
      const res = await axios.post(`${BASE_URL}/form`, data);
      dispatch(handleOpen({ message: res.data.message, severity: "success" }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border border-black flex flex-col gap-2 p-4 sm:w-[80%]">
      <div className="flex flex-col gap-4">
        <label className="form-control w-full">
          <p className="text-lg font-semibold label label-text">
            Name of the leader/ मुखिया का नाम
          </p>
          <input
            type="text"
            placeholder="Type here"
            value={formData.leaderName}
            onChange={(e) => handleInputChange("leaderName", e.target.value)}
            className="input input-bordered rounded-md w-full"
          />
        </label>
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <div className="w-full md:w-[50%]">
            <label className="form-control w-full">
              <p className="text-lg font-semibold label label-text">
                Father&apos;s Name/ पिता का नाम
              </p>
              <input
                type="text"
                placeholder="Type here"
                value={formData.fatherName}
                onChange={(e) =>
                  handleInputChange("fatherName", e.target.value)
                }
                className="input input-bordered rounded-md w-full"
              />
            </label>
          </div>
          <div className="w-full md:w-[50%]">
            <label className="form-control w-full">
              <p className="text-lg font-semibold label label-text">
                Gotra/ गोत्र
              </p>
              <input
                type="text"
                placeholder="Type here"
                value={formData.gotra}
                onChange={(e) => handleInputChange("gotra", e.target.value)}
                className="input input-bordered rounded-md w-full"
              />
            </label>
          </div>
        </div>
        <label className="form-control w-full">
          <p className="text-lg font-semibold label label-text">Address/ पता</p>
          <input
            type="text"
            placeholder="Type here"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className="input input-bordered rounded-md w-full"
          />
        </label>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <div className="md:w-[50%]">
          <label className="form-control w-full">
            <p className="text-lg font-semibold label label-text">
              Original Resident/ मुल निवासी
            </p>
            <input
              type="text"
              placeholder="Type here"
              value={formData.originalResident}
              onChange={(e) =>
                handleInputChange("originalResident", e.target.value)
              }
              className="input input-bordered rounded-md w-full"
            />
          </label>
        </div>
        <div className="md:w-[50%]">
          <label className="form-control w-full">
            <p className="text-lg font-semibold label label-text">
              Profession/ पेशा
            </p>
            <input
              type="text"
              placeholder="Type here"
              value={formData.profession}
              onChange={(e) => handleInputChange("profession", e.target.value)}
              className="input input-bordered rounded-md w-full"
            />
          </label>
        </div>
      </div>

      <label className="form-control w-full">
        <p className="text-lg font-semibold label label-text">
          Office Address/ कार्यालय पता
        </p>
        <input
          type="text"
          placeholder="Type here"
          value={formData.officeAddress}
          onChange={(e) => handleInputChange("officeAddress", e.target.value)}
          className="input input-bordered rounded-md w-full"
        />
      </label>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <div className="md:w-[50%]">
          <label className="form-control w-full">
            <p className="text-lg font-semibold label label-text">
              Mobile Number/ मोबाइल नंबर
            </p>
            <input
              type="text"
              placeholder="Type here"
              value={formData.mobileNumber}
              onChange={(e) =>
                handleInputChange("mobileNumber", e.target.value)
              }
              className="input input-bordered rounded-md w-full"
            />
          </label>
        </div>
        <div className="md:w-[50%]">
          <label className="form-control w-full">
            <p className="text-lg font-semibold label label-text">
              Email/ ईमेल
            </p>
            <input
              type="text"
              placeholder="Type here"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="input input-bordered rounded-md w-full"
            />
          </label>
        </div>
      </div>
      <h1 className="text-xl font-semibold">
        Religious Affiliation/ धार्मिक मान्यता
      </h1>
      <div className="flex flex-col md:flex-row mt-3 md:items-center gap-5">
        <p className="text-lg font-semibold md:w-[10%]">मंदिर मार्गी</p>
        <div className="flex flex-wrap gap-5">
          <label className="input input-bordered flex items-center gap-2">
            तपागच्छ
            <input
              type="checkbox"
              checked={formData.religiousAffiliation.mandirMargi.tapagacch}
              onChange={(e) =>
                handleAffiliationChange(
                  "mandirMargi",
                  "tapagacch",
                  e.target.checked
                )
              }
              className="checkbox"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            खरतरगच्छ
            <input
              type="checkbox"
              checked={formData.religiousAffiliation.mandirMargi.khartargacch}
              onChange={(e) =>
                handleAffiliationChange(
                  "mandirMargi",
                  "khartargacch",
                  e.target.checked
                )
              }
              className="checkbox"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            त्रिस्तुतिक
            <input
              type="checkbox"
              checked={formData.religiousAffiliation.mandirMargi.tristutik}
              onChange={(e) =>
                handleAffiliationChange(
                  "mandirMargi",
                  "tristutik",
                  e.target.checked
                )
              }
              className="checkbox"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        <p className="text-lg font-semibold w-[10%]">स्थानकवासी</p>
        <div className="flex flex-wrap gap-5">
          <label className="input input-bordered flex items-center gap-2">
            श्रमण संघ
            <input
              type="checkbox"
              checked={formData.religiousAffiliation.sthanakvasi.shramanSangh}
              onChange={(e) =>
                handleAffiliationChange(
                  "sthanakvasi",
                  "shramanSangh",
                  e.target.checked
                )
              }
              className="checkbox"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            तेरापंथ
            <input
              type="checkbox"
              checked={formData.religiousAffiliation.sthanakvasi.terapanth}
              onChange={(e) =>
                handleAffiliationChange(
                  "sthanakvasi",
                  "terapanth",
                  e.target.checked
                )
              }
              className="checkbox"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            साधुमार्गी
            <input
              type="checkbox"
              checked={formData.religiousAffiliation.sthanakvasi.sadhumargi}
              onChange={(e) =>
                handleAffiliationChange(
                  "sthanakvasi",
                  "sadhumargi",
                  e.target.checked
                )
              }
              className="checkbox"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            अन्य
            <input
              type="checkbox"
              checked={formData.religiousAffiliation.sthanakvasi.any}
              onChange={(e) =>
                handleAffiliationChange("sthanakvasi", "any", e.target.checked)
              }
              className="checkbox"
            />
          </label>
        </div>
      </div>
      <label className="form-control w-full">
        <p className="text-lg font-semibold label label-text">
          Achievement/ उपलब्धि
        </p>
        <input
          type="text"
          placeholder="Type here"
          value={formData.achievement}
          onChange={(e) => handleInputChange("achievement", e.target.value)}
          className="input input-bordered rounded-md w-full"
        />
      </label>
      <div className="mt-5">
        {rows.map((row, index) => (
          <div
            key={index}
            className="flex flex-wrap p-4 border-2 border-black mb-4"
          >
            <div className="w-full md:w-1/3">
              <label className="block font-semibold my-1">
                Name/ सदस्य के नाम
              </label>
              <input
                type="text"
                value={row.name}
                onChange={(e) => handleRowChange(index, "name", e.target.value)}
                className="input input-bordered rounded-md w-full md:max-w-xs"
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="block font-semibold my-1">
                Date of Birth/ जन्म की तारीख
              </label>
              <input
                type="date"
                value={row.dob}
                onChange={(e) => handleRowChange(index, "dob", e.target.value)}
                className="input input-bordered rounded-md w-full md:max-w-xs"
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="block font-semibold my-1">
                Relation /मुखिया से संबंध
              </label>
              <input
                type="text"
                value={row.relation}
                onChange={(e) =>
                  handleRowChange(index, "relation", e.target.value)
                }
                className="input input-bordered rounded-md w-full md:max-w-xs"
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="block font-semibold my-1">
                Blood Group/ ब्लड ग्रुप
              </label>
              <input
                type="text"
                value={row.bloodGroup}
                onChange={(e) =>
                  handleRowChange(index, "bloodGroup", e.target.value)
                }
                className="input input-bordered rounded-md w-full md:max-w-xs"
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="block font-semibold my-1">
                Educational Qualification/ शैक्षणिक योग्यता
              </label>
              <input
                type="text"
                value={row.education}
                onChange={(e) =>
                  handleRowChange(index, "education", e.target.value)
                }
                className="input input-bordered rounded-md w-full md:max-w-xs"
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="block font-semibold my-1">
                Married or Single/ विवाहित या अविवाहित
              </label>
              <input
                type="text"
                value={row.married}
                onChange={(e) =>
                  handleRowChange(index, "married", e.target.value)
                }
                className="input input-bordered rounded-md w-full md:max-w-xs"
              />
            </div>
            <div className="w-full md:w-auto flex items-center">
              <button
                onClick={() => handleRemoveRow(index)}
                className="text-red-500 mt-2"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={handleAddRow}
          className="mt-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Add More
        </button>
      </div>
      <div className="text-center w-[100%]">
        <button
          onClick={handleSubmit}
          className="btn bg-green-500 sm:w-[20%] mt-5"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
