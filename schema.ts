export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      inverters: {
        Row: {
          brand: string | null
          created_at: string | null
          depth: number | null
          height: number | null
          id: string
          image: string | null
          name: string | null
          net_weight: number | null
          power: string | null
          voltage: number | null
          width: number | null
        }
        Insert: {
          brand?: string | null
          created_at?: string | null
          depth?: number | null
          height?: number | null
          id?: string
          image?: string | null
          name?: string | null
          net_weight?: number | null
          power?: string | null
          voltage?: number | null
          width?: number | null
        }
        Update: {
          brand?: string | null
          created_at?: string | null
          depth?: number | null
          height?: number | null
          id?: string
          image?: string | null
          name?: string | null
          net_weight?: number | null
          power?: string | null
          voltage?: number | null
          width?: number | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          address: string | null
          created_at: string | null
          electricity: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          telephone: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          electricity?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          telephone?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          electricity?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          telephone?: string | null
        }
        Relationships: []
      }
      packages: {
        Row: {
          battery: string | null
          created_at: string | null
          description: string | null
          design: string | null
          id: string
          image: string | null
          inverter: string | null
          level: string | null
          name: string | null
          order: number | null
          panels: string | null
          price: number | null
          runtime: string | null
          slug: string | null
          solution: string | null
          type: string | null
        }
        Insert: {
          battery?: string | null
          created_at?: string | null
          description?: string | null
          design?: string | null
          id?: string
          image?: string | null
          inverter?: string | null
          level?: string | null
          name?: string | null
          order?: number | null
          panels?: string | null
          price?: number | null
          runtime?: string | null
          slug?: string | null
          solution?: string | null
          type?: string | null
        }
        Update: {
          battery?: string | null
          created_at?: string | null
          description?: string | null
          design?: string | null
          id?: string
          image?: string | null
          inverter?: string | null
          level?: string | null
          name?: string | null
          order?: number | null
          panels?: string | null
          price?: number | null
          runtime?: string | null
          slug?: string | null
          solution?: string | null
          type?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          battery_description: string
          battery_image: string
          created_at: string
          description: string
          id: string
          inverter_description: string
          inverter_image: string
          kilowatts: number | null
          main_image: string
          name: string
          peripherals: string
          price: number
          solar_panel_description: string
          solar_panel_image: string
        }
        Insert: {
          battery_description: string
          battery_image: string
          created_at?: string
          description: string
          id?: string
          inverter_description: string
          inverter_image: string
          kilowatts?: number | null
          main_image: string
          name: string
          peripherals: string
          price: number
          solar_panel_description: string
          solar_panel_image: string
        }
        Update: {
          battery_description?: string
          battery_image?: string
          created_at?: string
          description?: string
          id?: string
          inverter_description?: string
          inverter_image?: string
          kilowatts?: number | null
          main_image?: string
          name?: string
          peripherals?: string
          price?: number
          solar_panel_description?: string
          solar_panel_image?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
