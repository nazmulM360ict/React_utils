import { useState } from "react";

export function TabComponent() {
  const [activeTab, setActiveTab] = useState("London"); // Initialize the active tab to 'London'

  const openCity = (cityName: string) => {
    setActiveTab(cityName);
  };

  return (
    <div>
      <div className="tab">
        <button
          className={`tablinks ${activeTab === "London" ? "active" : ""}`}
          onClick={() => openCity("London")}
        >
          London
        </button>
        <button
          className={`tablinks ${activeTab === "Paris" ? "active" : ""}`}
          onClick={() => openCity("Paris")}
        >
          Paris
        </button>
        <button
          className={`tablinks ${activeTab === "Tokyo" ? "active" : ""}`}
          onClick={() => openCity("Tokyo")}
        >
          Tokyo
        </button>
      </div>

      <div
        id="London"
        className={`tabcontent ${activeTab === "London" ? "active" : ""}`}
      >
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div
        id="Paris"
        className={`tabcontent ${activeTab === "Paris" ? "active" : ""}`}
      >
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div
        id="Tokyo"
        className={`tabcontent ${activeTab === "Tokyo" ? "active" : ""}`}
      >
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
  );
}
