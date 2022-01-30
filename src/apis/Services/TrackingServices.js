import { TrackingEndPoints } from "../EndPoints/TrackingEndPoints";
import { Network } from "../Network";

export class AuthServices {
  static getTrackingDetails(TrackingNumber) {
    return Network.fetch(TrackingEndPoints.track.url(TrackingNumber),
     {
      method: TrackingEndPoints.track.method,
    });
  }
}
