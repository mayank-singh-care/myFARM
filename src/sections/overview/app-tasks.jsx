import { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import FormControlLabel from '@mui/material/FormControlLabel';

import Iconify from 'src/components/iconify';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

export default function AnalyticsTasks({ title, subheader, list, ...other }) {
  const [selected, setSelected] = useState(['2']);
  const [tasks, setTasks] = useState(list);

  const handleClickComplete = (taskId) => {
    const tasksCompleted = selected.includes(taskId)
      ? selected.filter((value) => value !== taskId)
      : [...selected, taskId];

    setSelected(tasksCompleted);
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          checked={selected.includes(task.id)}
          onChange={() => handleClickComplete(task.id)}
          setTasks={setTasks}
        />
      ))}
    </Card>
  );
}

AnalyticsTasks.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function TaskItem({ task, checked, onChange, setTasks }) {
  const [open, setOpen] = useState(null);
  const [isEdit, setIsEdit] = useState(false); // New state for edit mode
  const [editText, setEditText] = useState(task.name);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleEdit = () => {
    handleCloseMenu();
    setIsEdit(!isEdit);
    setEditText(task.name);
    console.info('EDIT', task.id);
  };

  const handleDelete = () => {
    handleCloseMenu();
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    console.info('DELETE', task.id);
  };

  const handleSave = () => {
    // Update task data with edited text (implement logic for updating data source)
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, name: editText } : t))
    );
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setEditText(task.name); // Reset edit text on cancel
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          pl: 2,
          pr: 1,
          py: 1,
          '&:not(:last-of-type)': {
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
          },
          ...(checked && {
            color: 'text.disabled',
            textDecoration: 'line-through',
          }),
        }}
      >
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={onChange} />}
          label={
            isEdit ? (
              <TextField
                autoFocus
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleSave} // Save on blur if outside click
              />
            ) : (
              task.name
            )
          }
          sx={{ flexGrow: 1, m: 0 }}
        />

        <IconButton color={open ? 'inherit' : 'default'} onClick={handleOpenMenu}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>

        {isEdit && ( // Show save and cancel buttons only in edit mode
          <>
            <IconButton color="primary" onClick={handleSave}>
              <Iconify icon="eva:checkmark-fill" />
            </IconButton>
            <IconButton color="error" onClick={handleCancel}>
              <Iconify icon="eva:close-fill" />
            </IconButton>
          </>
        )}
      </Stack>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleEdit}>
          <Iconify icon="solar:pen-bold" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <Iconify icon="solar:trash-bin-trash-bold" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

TaskItem.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  task: PropTypes.object,
};
