export interface NavItem { path: string; label: string; desc: string }

export interface ContentCase {
  metric: string;
  metricLabel: string;
  title: string;
  where: string;
  text: string;
  tags: string[];
}

export interface Job { period: string; company: string; client?: string; role: string }

export interface StackGroup {
  group: string;
  items: string[];
}
