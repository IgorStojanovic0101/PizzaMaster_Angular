export interface UserResponseDTO {
    id: number;
    name: string;
    email: string;
    password: string;
    username: string;
    imageContent?: string | null;
  }