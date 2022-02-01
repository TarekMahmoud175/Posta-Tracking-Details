import DomainUrl from "../Domain";

export const TrackingEndPoints = {
  track: {
    url: (trackingNumber) => `${DomainUrl}/shipments/track/${trackingNumber}`,
    method: "GET",
  },
};
