import DomainUrl from "../Domains";

export const TrackingEndPoints = {
  track: {
    url: (trackingNumber) => `${DomainUrl}/shipments/track/${trackingNumber}`,
    method: "GET",
  },
};
