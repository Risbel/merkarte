export interface IConfirmations {
  count: 1;
  next: null;
  previous: null;
  results: [
    {
      id: string;
      first_name: string;
      last_name: string;
      phone: string;
      email: string;
      address: string;
      company: string;
      is_active: boolean;
      created_at: string;
      updated_at: string;
      companions: [
        {
          id: string;
          first_name: string;
          last_name: string;
          subscription: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        }
      ];
    }
  ];
}
