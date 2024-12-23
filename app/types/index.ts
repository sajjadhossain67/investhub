export type UserRole = 'SUPER_ADMIN' | 'IDEA_CREATOR' | 'INVESTOR';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Idea {
  id: string;
  title: string;
  description: string;
  creatorId: string;
  targetAmount: number;
  currentAmount: number;
  demoUrl?: string;
  images: string[];
  status: 'DRAFT' | 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: Date;
  category: string;
}

export interface Bid {
  id: string;
  ideaId: string;
  investorId: string;
  amount: number;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  createdAt: Date;
}

export interface Investment {
  id: string;
  ideaId: string;
  investorId: string;
  amount: number;
  status: 'PENDING' | 'COMPLETED';
  transactionDate: Date;
}