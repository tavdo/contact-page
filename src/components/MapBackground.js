// src/components/MapBackground.js
import React from 'react';
import './MapBackground.css'; // If you have additional styling

const MapBackground = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.423508238588!2d41.63548037607284!3d41.646590871268174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40678615f2627a65%3A0x5246c47d94bb9614!2z4YOs4YOb4YOY4YOc4YOT4YOQIOGDkOGDnOGDk-GDoOGDmOGDkCDhg57hg5jhg6Dhg5Xhg5Thg5rhg6zhg53hg5Phg5Thg5Hhg6Phg5rhg5jhg6Eg4YOh4YOQ4YOu4YOU4YOa4YOd4YOR4YOY4YOhIOGDkuGDmOGDm-GDnOGDkOGDluGDmOGDkCDhg5Lhg5Dhg5vhg5Lhg5Thg5Hhg5Thg5rhg5gg4YOT4YOQ4YOQ4YOR4YOg4YOj4YOc4YOU4YOXISEh!5e0!3m2!1ska!2sge!4v1721736038803!5m2!1ska!2sge"
        width="100%" // Adjust width if necessary
        height="100%" // Adjust height if necessary
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapBackground;
