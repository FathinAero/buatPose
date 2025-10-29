
export interface Org {
  id: string
  name: string
}


export interface Device {
  id: string
  name: string
  email: string
  createdAt: string 
  revenue: number
}

// event yang ada di /device/[deviceId]/events
export interface DeviceEvent {
  id: string
  name: string
  createdAt: string
  revenue: number
}
