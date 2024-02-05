import { useEffect, useState } from 'react';
import { Observer } from "/components/Helpers/Observer";
import { Text } from "/components/Helpers/Text/Text";
import GravityFormForm, { getGravityForm } from "next-gravity-forms";

export const Contact = ({ data }) => {
    console.log("GravityFormForm:", GravityFormForm);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = await getGravityForm(data.form_id);
        console.log("formData:", formData);
        setFormData(formData || {});
      } catch (error) {
        console.error("Error fetching Gravity Form data:", error);
      }
    };

    fetchData();
  }, [data.form_id]);

  console.log("data:", data);
  console.log("formData:", formData);

  if (!formData) {
    return null; // Evita que se renderice nada si no hay datos del formulario
  }

  return (
    <section>
      <Observer id="contact" className="section-nine" data-waypoint=".25">
        <div className="shape-circle-1"></div>
        <div className="shape-circle-2"></div>

        <div className="container container-md">
          <div className="section-nine__row align-items-center">
            <div className="row">
              {data.top_title && (
                <div className="section-toptitle">{data.top_title}</div>
              )}
              {data.title && <Text className="section-title">{data.title}</Text>}
            </div>
          </div>

          <div className="section-nine__row section-nine__row--form">
            {data.description && (
              <div className="section-content">
                <div className="row">
                  <div className="section-text">{data.description}</div>
                  <span className="shape-content"></span>
                </div>
              </div>
            )}

            <GravityFormForm
              formId={data.form_id}
              presetValues={() => {}}
              successCallback={() => {}}
              errorCallback={() => {}}
              navigate={() => {}}
              helperText={{}}
            />
          </div>
        </div>
      </Observer>
    </section>
  );
};

export default Contact;
