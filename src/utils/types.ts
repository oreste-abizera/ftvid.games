export interface Match {
  manual: boolean;
  _id: string;
  url: string;
  title: string;
  thumbnail: string;
  embed: string;
  date: Date;
  side1: {
    name: string;
    url: string;
  };
  side2: {
    name: string;
    url: string;
  };
  competition: {
    id: Number;
    name: string;
    url: string;
  };
  videos: Array<{
    _id: string;
    title: string;
    embed: string;
  }>;
}

export interface PageStatus {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  limit: Number;
  nextPage: Number;
  page: Number;
  pagingCounter: Number;
  prevPage: Number;
  totalDocs: Number;
  totalPages: Number;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: any;
}
