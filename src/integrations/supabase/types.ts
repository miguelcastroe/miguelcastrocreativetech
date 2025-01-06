export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      api_keys: {
        Row: {
          api_key: string
          created_at: string
          id: string
          service_name: string
        }
        Insert: {
          api_key: string
          created_at?: string
          id?: string
          service_name: string
        }
        Update: {
          api_key?: string
          created_at?: string
          id?: string
          service_name?: string
        }
        Relationships: []
      }
      awards: {
        Row: {
          category: string | null
          created_at: string
          event: string
          id: string
          medal_color: string
          medal_type: string
          year: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          event: string
          id?: string
          medal_color: string
          medal_type: string
          year: string
        }
        Update: {
          category?: string | null
          created_at?: string
          event?: string
          id?: string
          medal_color?: string
          medal_type?: string
          year?: string
        }
        Relationships: []
      }
      emoji_mappings: {
        Row: {
          category: string | null
          created_at: string
          emojis: string[]
          id: string
          keywords: string[]
          theme: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          emojis: string[]
          id?: string
          keywords: string[]
          theme: string
        }
        Update: {
          category?: string | null
          created_at?: string
          emojis?: string[]
          id?: string
          keywords?: string[]
          theme?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          read: boolean | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          read?: boolean | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          read?: boolean | null
        }
        Relationships: []
      }
      news_sources: {
        Row: {
          category: string | null
          country: string | null
          created_at: string
          id: string
          is_active: boolean | null
          last_fetch: string | null
          name: string
          url: string
        }
        Insert: {
          category?: string | null
          country?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          last_fetch?: string | null
          name: string
          url: string
        }
        Update: {
          category?: string | null
          country?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          last_fetch?: string | null
          name?: string
          url?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          content: string
          created_at: string
          id: string
          published: boolean | null
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          published?: boolean | null
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          published?: boolean | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string
          description: string
          id: string
          is_sold_out: boolean | null
          price: number
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          is_sold_out?: boolean | null
          price: number
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          is_sold_out?: boolean | null
          price?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          is_admin: boolean | null
        }
        Insert: {
          created_at?: string
          id: string
          is_admin?: boolean | null
        }
        Update: {
          created_at?: string
          id?: string
          is_admin?: boolean | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          award_name: string | null
          award_type: string | null
          Client: string | null
          created_at: string
          description: string | null
          detailed_description: string | null
          id: string
          image_url: string | null
          project_type: string | null
          title: string
          video_url: string | null
        }
        Insert: {
          award_name?: string | null
          award_type?: string | null
          Client?: string | null
          created_at?: string
          description?: string | null
          detailed_description?: string | null
          id?: string
          image_url?: string | null
          project_type?: string | null
          title: string
          video_url?: string | null
        }
        Update: {
          award_name?: string | null
          award_type?: string | null
          Client?: string | null
          created_at?: string
          description?: string | null
          detailed_description?: string | null
          id?: string
          image_url?: string | null
          project_type?: string | null
          title?: string
          video_url?: string | null
        }
        Relationships: []
      }
      reservations: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          phone: string
          status: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          phone: string
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string
          status?: string | null
        }
        Relationships: []
      }
      spotify_tokens: {
        Row: {
          access_token: string
          created_at: string
          expires_at: string
          id: string
          refresh_token: string
        }
        Insert: {
          access_token: string
          created_at?: string
          expires_at: string
          id?: string
          refresh_token: string
        }
        Update: {
          access_token?: string
          created_at?: string
          expires_at?: string
          id?: string
          refresh_token?: string
        }
        Relationships: []
      }
      substack_config: {
        Row: {
          created_at: string
          id: string
          publication_name: string
        }
        Insert: {
          created_at?: string
          id?: string
          publication_name: string
        }
        Update: {
          created_at?: string
          id?: string
          publication_name?: string
        }
        Relationships: []
      }
      substack_posts: {
        Row: {
          created_at: string
          id: string
          published_at: string
          title: string
          url: string
        }
        Insert: {
          created_at?: string
          id?: string
          published_at: string
          title: string
          url: string
        }
        Update: {
          created_at?: string
          id?: string
          published_at?: string
          title?: string
          url?: string
        }
        Relationships: []
      }
      teams: {
        Row: {
          city: string | null
          created_at: string
          founded_year: number | null
          id: string
          logo_url: string | null
          name: string
          nickname: string | null
          primary_color: string | null
          secondary_color: string | null
          stadium: string | null
          website: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          founded_year?: number | null
          id?: string
          logo_url?: string | null
          name: string
          nickname?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          stadium?: string | null
          website?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          founded_year?: number | null
          id?: string
          logo_url?: string | null
          name?: string
          nickname?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          stadium?: string | null
          website?: string | null
        }
        Relationships: []
      }
      transfer_news: {
        Row: {
          content: string
          created_at: string | null
          id: string
          published_at: string | null
          source_id: string | null
          title: string
          url: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          published_at?: string | null
          source_id?: string | null
          title: string
          url: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          published_at?: string | null
          source_id?: string | null
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "transfer_news_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "news_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      transfers: {
        Row: {
          created_at: string | null
          date: string | null
          details: string | null
          id: string
          player: string
          season: number | null
          team: string
          type: string
        }
        Insert: {
          created_at?: string | null
          date?: string | null
          details?: string | null
          id?: string
          player: string
          season?: number | null
          team: string
          type: string
        }
        Update: {
          created_at?: string | null
          date?: string | null
          details?: string | null
          id?: string
          player?: string
          season?: number | null
          team?: string
          type?: string
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
