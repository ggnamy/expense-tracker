import { ExpenseProvider } from './context/ExpenseContext';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';

import styles from "./App.module.css";
import "./global.css";

const title = import.meta.env.VITE_APP_TITLE || "Expense Tracker";

export default function App() {
  return (
    <ExpenseProvider>
      <div className={styles.appWrapper}>
        
        <header className={styles.appHeader}>
          <h1>{title}</h1>
        </header>

        <div className={styles.appLayout}>
          
          <aside className={styles.appSidebar}>
            <ExpenseSummary />
            <ExpenseChart />
          </aside>

          <main className={styles.appContent}>
            <AddExpenseForm />
            <div className={styles.listContainer}>
              <ExpenseList />
            </div>
          </main>

        </div>

      </div>
    </ExpenseProvider>
  );
}